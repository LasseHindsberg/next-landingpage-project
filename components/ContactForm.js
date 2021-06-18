

export default function ContactForm() {
    return(
        <form className="contactForm">
            <label htmlFor="fname">Full Name:</label>
            <input type="text" name="fname" id="fname" placeholder="Full Name.."/>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" placeholder="your@email.com"/>
            <label htmlFor="msg">Your inquery:</label>
            <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
            <button type="submit">Send</button>
          </form>
    )
}