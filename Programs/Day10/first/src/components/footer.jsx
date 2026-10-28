function Footer({ year, company }) {
    return (
        <footer className="footer">
            <p>
                Copyright &copy; {year} {company}.
                All rights reserved.
            </p>
        </footer>
    );
}
export default Footer;