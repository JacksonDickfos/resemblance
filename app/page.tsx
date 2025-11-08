import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center relative z-10">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="Resemblance Logo"
            width={400}
            height={400}
            priority
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </main>
  )
}

