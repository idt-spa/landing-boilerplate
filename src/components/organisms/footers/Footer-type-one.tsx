"use client";

const footerContent = {
  navLinks: ["About us", "Services", "Use Cases", "Pricing", "Blog"],
  contact: {
    heading: "Contact us:",
    email: "Email: info@positivus.com",
    phone: "Phone: 555-567-8901",
    addressLine1: "Address: 1234 Main St",
    addressLine2: "Moonstone City, Stardust State 12345",
  },
  subscription: {
    placeholder: "Enter your email",
    buttonLabel: "Subscribe to news",
  },
  copyright: "© 2023 Positivus. All Rights Reserved.",
  privacyPolicy: "Privacy Policy",
};

export default function FooterTypeOne() {
  return (
    <section className="bg-[#191a23] rounded-tl-[45px] rounded-tr-[45px]">
      <footer className="w-full mt-10 md:px-[50px] lg:px-24 sm:px-16 px-6 py-14 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:items-stretch items-center md:gap-0 gap-5">
          <div className="contents md:flex mx-auto w-full md:flex-row flex-col md:justify-between justify-center items-center">
            {/* Logo SVG */}
            <svg
              className="w-44 h-8 order-1 md:order-none"
              viewBox="0 0 180 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Puoi incollare qui il contenuto completo dell'SVG logo (per brevità l'ho rimosso) */}
              <circle cx="15" cy="15" r="15" fill="white" />
            </svg>

            {/* Nav Links */}
            <ul className="order-2 md:order-none flex flex-col md:flex-row justify-start items-center gap-3 md:gap-5 lg:gap-10 text-white text-base lg:text-lg font-normal underline">
              {footerContent.navLinks.map((link) => (
                <li key={link} className="cursor-pointer">{link}</li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="order-5 md:order-none flex justify-start items-start gap-5 md:gap-3 lg:gap-5">
              {/* Facebook */}
              <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="white" />
                <path
                  d="M8.22178 22.0586H11.3059V12.0742H8.22178V22.0586Z"
                  fill="black"
                />
                <path
                  d="M7.94141 8.88672C7.94141 9.87109 8.7358 10.668 9.76384 10.668C10.7451 10.668 11.5395 9.87109 11.5395 8.88672C11.5395 7.90234 10.7451 7.05859 9.76384 7.05859C8.7358 7.05859 7.94141 7.90234 7.94141 8.88672Z"
                  fill="black"
                />
                <path
                  d="M19.8106 22.0586H22.9414V16.5742C22.9414 13.9023 22.3339 11.793 19.2031 11.793C17.7078 11.793 16.6797 12.6367 16.2592 13.4336H16.2124V12.0742H13.2685V22.0586H16.3526V17.1367C16.3526 15.8242 16.5863 14.5586 18.2218 14.5586C19.8106 14.5586 19.8106 16.0586 19.8106 17.1836V22.0586Z"
                  fill="black"
                />
              </svg>

              {/* LinkedIn */}
              <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 30 30" fill="none">
                <path
                  d="M30 15.0913C30 6.75456 23.2863 0 15 0C6.71371 0 0 6.75456 0 15.0913C0 22.6369 5.44355 28.9047 12.6411 30V19.4726H8.83064V15.0913H12.6411V11.8053C12.6411 8.03245 14.879 5.90264 18.2661 5.90264C19.9597 5.90264 21.6532 6.2069 21.6532 6.2069V9.91886H19.7782C17.9032 9.91886 17.2984 11.0751 17.2984 12.2921V15.0913H21.4718L20.8065 19.4726H17.2984V30C24.496 28.9047 30 22.6369 30 15.0913Z"
                  fill="white"
                />
              </svg>

              {/* Twitter */}
              <svg className="w-8 h-8 cursor-pointer" viewBox="0 0 30 30" fill="none">
                <circle cx="15" cy="15" r="15" fill="white" />
                <path
                  d="M21.9961 11.4915C22.6854 10.9745 23.3058 10.3541 23.7884 9.63028C23.168 9.90602 22.4442 10.1128 21.7204 10.1818C22.4786 9.73369 23.0301 9.04435 23.3058 8.18267C22.6165 8.59628 21.8238 8.90648 21.031 9.07881C20.3417 8.35501 19.4111 7.94141 18.3771 7.94141C16.378 7.94141 14.758 9.56135 14.758 11.5604C14.758 11.8362 14.7925 12.1119 14.8614 12.3876C11.8628 12.2153 9.1744 10.7677 7.38212 8.59628C7.07192 9.11328 6.89959 9.73369 6.89959 10.423C6.89959 11.6638 7.51999 12.7668 8.51953 13.4216C7.93359 13.3872 7.34766 13.2493 6.86512 12.9736V13.008C6.86512 14.7659 8.10593 16.2135 9.76034 16.5581C9.48461 16.6271 9.13994 16.696 8.82973 16.696C8.58847 16.696 8.38166 16.6615 8.1404 16.6271C8.58847 18.0747 9.93267 19.1087 11.5182 19.1432C10.2773 20.1082 8.72633 20.6942 7.03745 20.6942C6.72725 20.6942 6.45152 20.6597 6.17578 20.6252C7.76126 21.6592 9.65694 22.2452 11.725 22.2452C18.3771 22.2452 21.9961 16.7649 21.9961 11.974C21.9961 11.8017 21.9961 11.6638 21.9961 11.4915Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          {/* Contact + Subscription */}
          <div className="contents md:flex mt-16 md:flex-row flex-col justify-between items-center">
            {/* Contact Info */}
            <div className="order-3 md:order-none inline-flex flex-col justify-start items-center md:items-start gap-3 md:gap-7">
              <h3 className="px-1.5 bg-[#b9ff66] rounded-md text-black text-xl font-medium">
                {footerContent.contact.heading}
              </h3>
              <p className="flex flex-col justify-start md:items-start items-center gap-2 md:gap-5">
                <span className="text-white text-lg font-normal">{footerContent.contact.email}</span>
                <span className="text-white text-lg font-normal">{footerContent.contact.phone}</span>
                <span className="text-white text-lg font-normal md:text-left text-center">
                  {footerContent.contact.addressLine1}
                  <br />
                  {footerContent.contact.addressLine2}
                </span>
              </p>
            </div>

            {/* Newsletter */}
            <div className="order-4 md:order-none p-6 md:px-10 md:py-14 bg-[#292a32] rounded-2xl flex flex-col items-stretch lg:w-auto w-full lg:flex-row justify-start lg:items-start gap-5 overflow-hidden">
              <input
                type="email"
                className="w-full px-4 md:px-9 py-5 rounded-2xl outline bg-[#292a32] outline-offset-[-1px] outline-white text-white text-lg font-normal"
                placeholder={footerContent.subscription.placeholder}
              />
              <button className="cursor-pointer px-3 md:px-9 py-5 bg-[#b9ff66] rounded-2xl text-center text-black text-xl font-normal leading-7">
                {footerContent.subscription.buttonLabel}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row justify-start items-start gap-5 sm:gap-10">
          <p className="text-white text-lg font-normal leading-7">
            {footerContent.copyright}
          </p>
          <a className="cursor-pointer text-white text-lg font-normal underline leading-7">
            {footerContent.privacyPolicy}
          </a>
        </div>
      </footer>
    </section>
  );
}
