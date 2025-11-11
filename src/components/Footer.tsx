const Footer = () => {
  return (
    <footer className="bg-charcoal text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-bold text-xl mb-2">The Reforge Project</h3>
          <p className="text-sm opacity-90">Forged from Violence, Crafted for Change.</p>
          <p className="text-xs opacity-75 mt-4">
            © {new Date().getFullYear()} The Reforge Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
