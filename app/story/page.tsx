import Navigation from '../components/Navigation'

export default function StoryPage() {
  return (
    <>
      <Navigation />
      <main className="pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extralight tracking-[0.15em] mb-12">My Story</h1>
          <div className="prose prose-lg prose-invert">
            {/* Add full story content here */}
            <p className="text-gray-300 leading-relaxed">
              Full story content will go here...
            </p>
          </div>
        </div>
      </main>
    </>
  )
}