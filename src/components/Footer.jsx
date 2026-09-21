import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {site.name}. Built with React and Vite.
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
