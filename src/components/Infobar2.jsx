import React from 'react';

function Infobar2() {
    return (
        <div className="flex pt-10 justify-evenly w-full items-center p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center w-2/3 justify-center gap-4">
                <div className="flex items-center -space-x-2">
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt="User 1"
                    />
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt="User 2"
                    />
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://th.bing.com/th/id/OIP.L-PLw9YL0s6ErCIcuprlKgAAAA?w=175&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                        alt="User 3"
                    />
                    <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full text-black font-bold">
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
            <div className="flex gap-2 text-left ">
                <div className='w-[30%]'>
                    <h3 className="text-lg font-bold">Partner with</h3>
                    <p className="text-[12px] text-gray-600">
                        We are a trusted partner of airlines, payment gateways, and travel services around the world.
                    </p>
                </div>
                <div className="flex gap-4 mt-2">
                    <img
                        className="w-16"
                        src="https://via.placeholder.com/64?text=Skrill"
                        alt="Skrill"
                    />
                    <img
                        className="w-16"
                        src="https://via.placeholder.com/64?text=PayPal"
                        alt="PayPal"
                    />
                    <img
                        className="w-16"
                        src="https://via.placeholder.com/64?text=Stripe"
                        alt="Stripe"
                    />
                    <img
                        className="w-16"
                        src="https://via.placeholder.com/64?text=Mastercard"
                        alt="Mastercard"
                    />
                </div>
            </div>
        </div>
    );
}

export default Infobar2;
