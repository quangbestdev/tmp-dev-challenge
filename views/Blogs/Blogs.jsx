import React from 'react';
import Container from '../../components/Container';
import Typography from '../../components/Typography';
import Divider from '../../components/Divider';
import GetStarted from '../../components/GetStarted';
import Layout from '../../components/Layout';
import CategoryTab from '../../components/CategoryTab';

import styles from './Blogs.module.css';

import { blogs as blogData } from '../../blogs';

const Blogs = () => {

  const [categories, setCategories] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const blogs = React.useMemo(() => {
    return blogData.map(blogItem => ({ ...blogItem, categories: blogItem.categories[0].split(", ") }))
  }, [blogData]);

  React.useEffect(() => {
    const stagedCategories = [];

    blogs.forEach(blogItem => {
      blogItem.categories.forEach((categoryItem) => {
        if (!stagedCategories.includes(categoryItem)) {
          stagedCategories.push(categoryItem)
        }
      })
    })

    setCategories(stagedCategories)
  }, [blogs]);

  const toggleCategory = (categoryItem) => {
    if (selectedCategories.includes(categoryItem)) {
      setSelectedCategories(selectedCategories.filter(selectedCategory => selectedCategory !== categoryItem))
    }
    else {
      setSelectedCategories(selectedCategories.concat([categoryItem]))
    }
  };

  const filteredBlogs = React.useMemo(() => {
    return blogs.filter(blogItem => {
      if (selectedCategories.length > 0) {
        return selectedCategories.every(selectedCategory => {
          let categoryIncluded = false;

          blogItem.categories.forEach((categoryItem) => {
            if (selectedCategory === categoryItem) {
              categoryIncluded = true
            }
          })
          return categoryIncluded;
        });
      }
      else {
        return true
      }
    })
  }, [blogs, selectedCategories])

  return (
    <Layout>
      <Container>
        <div className={styles['header']}>
          <Typography variant="h1">The Undone Blog</Typography>
          <Typography>Tips, stories, and our musings on everything in between.</Typography>
        </div>
        <div className={styles['content']}>
          <Typography variant="h2">Most recent</Typography>
          <Divider />
          <div className={styles['category-tabs']}>
            {categories && categories.length > 0 && categories.map(categoryItem => (
              <CategoryTab key={categoryItem} onClick={() => toggleCategory(categoryItem)} selected={selectedCategories.includes(categoryItem)}>{categoryItem}</CategoryTab>
            ))}
          </div>
          <div className={styles['blog-container']}>
            {filteredBlogs.map((blog, index) => {
              return (
                <div className={styles['blog']} key={index}>
                  <div className={styles['blog-image']} />
                  <div className={styles['blog-category']}>
                    {blog.categories.join()}
                  </div>
                  <Typography variant="h4">{blog.title}</Typography>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <GetStarted />
    </Layout>
  )
}

export default Blogs