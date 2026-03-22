import { PERSONAL } from '../data/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} {PERSONAL.name}. Crafted with precision & passion.
      </p>
    </footer>
  );
}
