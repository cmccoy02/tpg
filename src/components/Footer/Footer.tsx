import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
