function Footer() {
  return (
    <>
      <footer className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo section */}
            <div className="mb-8 md:mb-0">
              <a href="#" className="text-white text-xl font-bold">
                Website under development! Stay tuned for updates.
              </a>
            </div>
            <div className="bg-white text-black text-center py-2"></div>
            {/* Navigation section */}
            <nav className="flex flex-wrap justify-center md:justify-end -mx-2">
              <a
                href="https://github.com/raelestate/kyaraben"
                className="px-2 py-1 text-gray-300 hover:text-white"
              >
                Github
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
