import logo from "@/images/Signature1.png";

const headerData = {
  logo,
  navData: [
    {
      id: 1,
      href: "#home",
      name: "Home",
    },
    {
      id: 2,
      href: "#services",
      name: "About us",
    },
    {
      id: 3,
      href: "#pricing",
      name: "Pricing",
    },
    {
      id: 4,
      href: "#testimonials",
      name: "Testimonials",
    },
    {
      id: 5,
      href: "#blog",
      name: "Blog",
      subItems: [
        {
          id: 1,
          href: "/blog",
          name: "Blog Style 01",
        },
        {
          id: 2,
          href: "/blog-details",
          name: "Blog Details",
        },
      ],
    },
    {
      id: 6,
      href: "#contact",
      name: "Contact",
    },
  ],
};

export default headerData;
