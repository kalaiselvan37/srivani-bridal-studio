export default function Home () {

    const servicesData = [
        {img: "/images/services/Pre-Wedding-Makeup.jpg" , name: "Pre Wedding Makeup"},
        {img: "/images/services/Natural-Makeup.jpg" , name: "Natural Makeup"},
        {img: "/images/services/Smokey-Makeup.jpg" , name: "Smokey Makeup"},
        {img: "/images/services/Advanced-Facial.jpg" , name: "Advanced Facial"},
        {img: "/images/services/Bridal-Facial.jpg" , name: "Bridal Facial"},
        {img: "/images/services/Bridal-Jewellery-Rent.jpg" , name: "Bridal Jewellery Rent"},
        {img: "/images/services/Threading.jfif" , name: "Threading"},
        {img: "/images/services/Facial.jpg" , name: "Facial"},
        {img: "/images/services/Hair-Cutting.jpg" , name: "Hair Cutting"},
        {img: "/images/services/Waxing.jpg" , name: "Waxing"},
        {img: "/images/services/Pedicure.jpg" , name: "Pedicure"},
        {img: "/images/services/Manicure.jpg" , name: "Manicure"},
        {img: "/images/services/Saree-Dropping.jpg" , name: "Saree Draping"},
        {img: "/images/services/Hair-Wash.jpg" , name: "Hair Wash"},
        {img: "/images/services/Keratin.jpg" , name: "Keratin"},
        {img: "/images/services/Smoothing.jpg" , name: "Smoothing"},
        {img: "/images/services/Henna.jpg" , name: "Henna"},
        {img: "/images/services/Straightening.jpg" , name: "Straightening"},
        {img: "/images/services/Hot-oil-Massage.jpg" , name: "Hot oil Massage"},
        {img: "/images/services/Traditional-Makeup.webp" , name: "Traditional Makeup"},
        {img: "/images/services/Guest-Makeup.jpg" , name: "Guest Makeup"},
        {img: "/images/services/Party Makeup.jpg" , name: "Party Makeup"},
    ]

    return (
        <>
        <section className="p-5 bg-red-700 font-cormorantgaramond" id="home">
            <div className="bg-[url(/images/home1.png)] h-screen bg-no-repeat  w-full bg-center bg-cover rounded-4xl bg-white px-5">
                <div className="max-w-[95rem] mx-auto flex justify-center items-center h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
                        <div className="flex justify-center items-center">
                            <img src="/images/licensed-image.jfif" alt="" className="rounded-4xl" data-aos="fade-right" />
                        </div>

                        <div className="flex justify-center items-center" data-aos="fade-left">
                            <div className="space-y-7">
                                <p className="lg:text-7xl text-5xl font-medium niconne lg:text-start text-center">Every bride deserves to feel like a queen.</p>
                                <p className="text-2xl text-gray-800 lg:text-start text-center">At <span className="text-fuchsia-600 font-semibold ">Srivani Bridal Studio</span> , we specialize in flawless bridal looks that enhance your natural beauty.</p>
                                <div className="flex justify-center items-center">
                                    <a href="#contact">
                                        <button className="bg-amber-400 px-4 py-2 font-semibold text-lg rounded-2xl shadow-lg">Book Your Appointment</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-10 font-cormorantgaramond scroll-mt-24 overflow-hidden" id="about">
            <div className="max-w-[95rem] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 bg-neutral-200 p-5 gap-5 rounded-2xl">
                    <div>
                        <img src="/images/elegant-indian-bride.jpg" alt="" className="rounded-2xl" data-aos="fade-up-right" data-aos-duration="2500" />
                    </div>
                    <div className="bg-white rounded-2xl p-5">
                        <div>
                            <h1 className="text-center text-2xl font-semibold text-pink-600">About Us</h1>
                            <div className="py-5 text-justify space-y-5 text-xl">
                                <p className="">Every bride dreams of looking her absolute best on her wedding day, and at <span className="text-fuchsia-600 font-semibold">Srivani Bridal studio</span> , we make that dream a reality. With a passion for beauty and an eye for detail, we specialize in creating flawless bridal looks that enhance your natural charm while reflecting your unique style.</p>
                                <p className="">Our studio blends traditional artistry with modern techniques, ensuring every bride feels confident, radiant, and picture-perfect from the first ceremony to the last celebration. We use only premium, skin-friendly products that last throughout your big day, no matter how emotional or energetic the occasion.</p>
                                <p>From engagements, weddings, and receptions to special occasions and party makeovers, our team brings creativity, precision, and professionalism to every look we design.</p>
                                <h2 className="text-center eagle-lake text-2xl font-semibold text-red-600">Unveil Your Radiance on Your Big Day</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/images/elegant-indian-bride.jpg" alt="" className="rounded-2xl" data-aos="fade-up-left" data-aos-duration="2500" />
                    </div>
                </div>
            </div>
        </section>

        <section className="font-cormorantgaramond scroll-mt-24" id="services">
            <div className="text-center">
                <h1 className="text-3xl font-semibold text-pink-600">Our Services</h1>
            </div>
            <div className="max-w-[95rem] mx-auto py-5">
                <div>
                    <img src="/images/indian-bridal-makeup-studio.png" alt="" className="h-[35dvh] w-full object-cover object-center rounded-3xl"/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-10 mx-5 -mt-12">
                    {servicesData.map((data, index ) =>{
                        return(
                        <div key={index} className="bg-white p-5 shadow-[1px_13px_32px_10px_rgba(0,_0,_0,_0.1)] hover:scale-105 transition-transform ease-in-out rounded-3xl bg-[url(/images/floral_corner_design.png)] bg-center bg-cover relative z-20">
                            <div className="absolute bg-pink-100 inset-0 opacity-55 rounded-3xl"></div>
                            <img src={data.img} alt="" className="rounded-3xl relative h-[300px] w-full object-cover" />
                            <div className="flex justify-center items-center">
                                <h4 className="text-center mt-5 text-3xl niconne  relative bg-pink-800 text-white w-fit px-6 py-1 rounded-xl shadow-2xl">{data.name}</h4>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="font-cormorantgaramond scroll-mt-24" id="contact">
            <div className="max-w-[95rem] mx-auto py-5">
                <div className="rounded-3xl p-5 bg-[url(/images/licensed-image.jfif)] relative">
                    <div className="absolute bg-black/55 inset-0 rounded-3xl"></div>
                    <div className="text-center relative">
                        <h1 className="text-2xl font-semibold text-pink-600">Contact Us</h1>
                    </div>
                    <form action="">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative mt-5 px-5">
                            <div>
                                <label htmlFor="" className="text-white font-semibold text-lg mx-2">Full Name</label>
                                <input type="text" name="" id="" className="bg-white w-full p-3 rounded-2xl mt-1" placeholder="Enter your Full Name" required />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white font-semibold text-lg mx-2">Email</label>
                                <input type="email" name="" id="" className="bg-white w-full p-3 rounded-2xl mt-1" placeholder="Enter your Email address" required />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white font-semibold text-lg mx-2">Mobile Number</label>
                                <input type="number" name="" id="" className="bg-white w-full p-3 rounded-2xl mt-1" placeholder="Enter your Mobile number" required />
                            </div>
                            <div>
                                <label htmlFor="" className="text-white font-semibold text-lg mx-2">Select Service</label>
                                <select name="" id="" className="bg-white w-full p-3 rounded-2xl mt-1"   required >
                                    <option value="">Select the Service</option>
                                    {servicesData.map((data, index) => (
                                        <option key={index} value={data.name}>{data.name}</option>
                                    ))}
                                </select>
                            </div>
                             <div>
                                <label htmlFor="" className="text-white font-semibold text-lg mx-2">Full Address</label>
                                <textarea type="text" name="" id="" rows={5} className="bg-white w-full p-3 rounded-2xl mt-1" placeholder="Enter your full address" required >
                                    </textarea>
                            </div>
                            <div>
                                <label htmlFor="" className="text-white font-semibold text-lg mx-2">Message</label>
                                <textarea type="text" name="" id="" rows={5} className="bg-white w-full p-3 rounded-2xl mt-1" placeholder="Enter your message"  >
                                    </textarea>
                            </div>
                            
                        </div>
                        <div className="relative flex justify-center items-center mt-5">
                            <button type="submit" className="rounded-2xl bg-yellow-300 px-6 cursor-pointer py-1 text-lg font-semibold text-black">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <section className="mt-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15631.615370339443!2d78.16426350970245!3d11.63020188444827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babee3c8eb4e4a1%3A0x21372640b61dcdfe!2sAttur%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1759575149622!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        </>
    )
}