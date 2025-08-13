export default function Footer() {
  return (
    <footer className="text-center align-bottom md:max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 border-t border-b border-muted-foreground py-4 md:py-10">
        <div>
          <h4 className="font-bold text-primary">Company</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary">Shipping services</h4>
          <ul>
            <li>Standard Shipping</li>
            <li>Express Shipping</li>
            <li>International Shipping</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary">Customer</h4>
          <ul>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="p-5 my-10">
        <p className="text-md text-muted-foreground">
          Made with <span className="text-primary">&hearts;</span> by Minhaz 2025.
        </p>
      </div>
    </footer>
  )
}
