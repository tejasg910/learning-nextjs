/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.dummyjson.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/redirection/student/",
        destination: "/",
        permanent: false,
      },
      {
        source: "/redirection/student/:id",
        destination: "/",
        permanent: false,
      },
    ];
  },

  env: {
    NAME: "TEJASHIAL",
  },
};

module.exports = nextConfig;

//google bots indexes the pages based on the redirection code if the redirection code is permanet google will not index the page in the seearch console while in case of temporary it will indexed
