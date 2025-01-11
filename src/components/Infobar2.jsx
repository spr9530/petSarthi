import React from 'react';

function Infobar2() {
    return (
        <div className="flex justify-center pt-10 w-full items-center p-6 bg-white rounded-lg shadow-md">
            <div className='flex w-[90%] gap-6'>
                <div className="flex items-center border py-5 border-slate-400 rounded-2xl  justify-center gap-4">
                    <div className="flex items-center -space-x-2">
                        <img
                            className="w-12 h-12 text-lg rounded-full border-2 border-white"
                            src="https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt="User 1"
                        />
                        <img
                            className="w-12 h-12 text-lg rounded-full border-2 border-white"
                            src="https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt="User 2"
                        />
                        <img
                            className="w-12 h-12 text-lg rounded-full border-2 border-white"
                            src="https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt="User 3"
                        />
                        <div className="w-12 h-12 text-lg flex items-center justify-center bg-yellow-400 rounded-full text-black font-bold">
                            +
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium">
                            <span className="font-bold">1684</span> people used Travila in the last{' '}
                            <span className="font-bold">24 hours</span>
                        </p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <h3 className="text-lg font-bold">Partner with</h3>
                        <p className="text-[12px] text-gray-600">
                            We are a trusted partner of airlines, payment gateways, and travel services around the world.
                        </p>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="Skrill"
                        />
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="PayPal"
                        />
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="Stripe"
                        />
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="Mastercard"
                        />
                    </div>
                </div>
                {/* <div className="flex gap-2 ">
                    <div className='w-[30%]'>

                    </div>
                    <div className="flex gap-4 mt-2">
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="Skrill"
                        />
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="PayPal"
                        />
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="Stripe"
                        />
                        <img
                            className="w-16"
                            src="https://travila-nextjs.vercel.app/assets/imgs/template/icons/stripe.png"
                            alt="Mastercard"
                        />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Infobar2;
