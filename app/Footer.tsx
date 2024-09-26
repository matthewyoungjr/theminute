import Link from 'next/link';
export default function Footer () {
      return (
            <>
            <footer className='w-full block text-center'>
                  <p className="text-center text-base md:text-lg xl:text-xl">Made with ❤️ by Matthew.</p>
                  <div className="flex space-x-5">
                  <p className="text-center text-base md:text-lg xl:text-xl"><Link href="https://github.com/matthewyoungjr" target="_blank">Github</Link></p>
                  <p className="text-center text-base md:text-lg xl:text-xl"><Link href="mailto:mattyoungjnr@gmail.com" target="_blank">Email</Link></p>
                  <p className="text-center text-base md:text-lg xl:text-xl"><Link href="https://x.com/themattjnr" target="_blank">X / Twitter</Link></p>

                  </div>
            </footer>
            </>
      )
}