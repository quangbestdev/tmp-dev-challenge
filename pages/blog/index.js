import { blogs } from '../../blogs';

export default function Blog() {
  return (
    <div style={{ padding: '32px' }}>
      <h1>The Undone Blog</h1>
      <p>Tips, stories, and our musings on everything in between.</p>
      <div style={{ marginTop: '24px' }}>
        {blogs.map((blog) => {
          return (
            <div style={{ margin: '8px 0' }}>
              <h2>{blog.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
