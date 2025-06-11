import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dream Stay Last Minute Getaways</title>
        <meta name="description" content="Where Last Minute Meets Luxury" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <img src="/logo.png" alt="Dream Stay Logo" className="w-48 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-teal-700 mb-4">
          Dream Stay
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Last Minute Meets Luxury
        </p>
        <a href="#" className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-2xl shadow-lg text-lg transition">
          Create Your Free Account
        </a>
      </main>
    </>
  )
}
