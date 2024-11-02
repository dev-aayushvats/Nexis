function Footer() {
  return (
    <div>
      <footer className="footer footer-center bg-primary-400 text-primary-content p-10">
        <aside>
          <h1 className="text-4xl font-bold font-space_grotesk">NEXIS</h1>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
