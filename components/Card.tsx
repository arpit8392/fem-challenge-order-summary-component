import { MusicalNoteIcon } from '@heroicons/react/24/solid'

const Card = () => {
	return (
		<section className='flex max-w-md flex-col items-center justify-center rounded-2xl bg-white shadow-2xl'>
			<img
				src='/images/illustration-hero.svg'
				alt='Hero Image'
				className='rounded-t-2xl'
			/>

			<div className='flex flex-col items-center space-y-5 p-8 text-center md:p-11'>
				<h1 className='text-3xl font-black text-darkBlue'>Order Summary</h1>
				<p className='leading-7 text-desaturatedBlue  '>
					You can now listen to millions of songs, audiobooks, and podcasts on
					any device anywhere you like!
				</p>
				<div className='flex w-full items-center justify-between rounded-xl bg-lightPaleBlue p-6'>
					<div className='flex items-center space-x-4'>
						<div className='flex items-center rounded-full bg-[#DFE6FB] p-4'>
							<MusicalNoteIcon className='w-5 text-desaturatedBlue ' />
						</div>
						<div className='flex flex-col space-y-1'>
							<h2 className='font-black text-darkBlue'>Annual Plan</h2>
							<h3 className='text-desaturatedBlue'>$59.99/year</h3>
						</div>
					</div>

					<div>
						<button className='text-sm font-bold text-ctaBlue underline underline-offset-2 hover:text-brightBlue hover:no-underline'>
							Change
						</button>
					</div>
				</div>
				<div className='flex w-full flex-col space-y-8 pt-2'>
					<button className='rounded-xl bg-ctaBlue py-4 font-black text-white hover:bg-brightBlue'>
						Proceed to Payment
					</button>
					<button className='font-black text-desaturatedBlue hover:text-darkBlue'>
						Cancel Order
					</button>
				</div>
			</div>
		</section>
	)
}
export default Card
