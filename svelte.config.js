import vercel from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: vercel({
      runtime: 'nodejs20.x',
    }),
  },
};

export default config;
