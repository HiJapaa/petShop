import Image from 'next/image'
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function About() {
    return (
        <section className="bg-[#FDF6EC] py-16">
            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4'>
                    <div className='relative' data-aos="fade-up-right" data-aos-delay="250">
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image src={about1Img} alt='Foto do cachorro' fill quality={100} priority className='object-cover hover:scale-110 duration-300' />
                        </div>

                        <div className='absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white'>
                            <Image src={about2Img} alt='Foto do gato' fill quality={100} priority />
                        </div>
                    </div>

                    <div className='space-y-6 mt-10' data-aos="fade-down-left" data-aos-delay="500">
                        <h2 className='text-4xl font-bold'>Sobre</h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio in, nihil nemo ducimus commodi, impedit praesentium eveniet ut officiis aspernatur natus harum rerum accusamus. Tenetur, magnam eveniet. Dolorum, quam minima!</p>

                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Aberto desde 2006
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Equipe com mais de 10 veterinários
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-red-500' />
                                Qualidade é nossa prioridade
                            </li>
                        </ul>

                        <div className='flex gap-2'>
                            <a target='_blank' href={`https://wa.me/5565992128346?text=Olá vim pelo site e gostaria de mais informações`} className='bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>
                                <WhatsappLogo className='w-5 h-5 text-white' />
                                Contato via WhatsApp
                            </a>

                            <a href="" className='flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'>
                                <MapPin className='w-5 h-5 text-black' />
                                Endereço da loja
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}