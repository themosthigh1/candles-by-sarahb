import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import HeroSection from "@/components/HeroSection/HeroSection";
import { fetchOrder } from "@/libs/apis";
import { authOptions } from "@/libs/auth";

const Orders = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const email = session?.user?.email as string;
  const orderData: any = await fetchOrder(email);

  return (
    <div>
      <HeroSection />
      <div className={titleClassNames.container}>
        <div>
          <h2 className={titleClassNames.trendingTitle}>Orders</h2>
        </div>

        <div className="relative overflow-x-auto pb-40">
          <div className="w-full text sm text-left text-gray-400">
            <div>
              {orderData.map((order: any) => {
                const totalPrice = order.items.reduce((acc: any, item: any) => {
                  const itemPrice = item.quantity * item.game.price;
                  return acc + itemPrice;
                }, 0);

                return (
                  <>
                    <div
                      key={order._id}
                      className="flex justify-between border-b"
                    >
                      <div className="px-6 py-4 whitespace-nowrap">
                        {order.items.map((item: any) => (
                          <span key={item._id}>
                            {item.game.name} {item.quantity} <br />
                          </span>
                        ))}
                      </div>
                      <div className="px-6 py-4">
                        {order.items.map((item: any) => (
                          <span key={item._id}>
                            $ {item.game.price}.00 <br />
                          </span>
                        ))}
                      </div>
                      <div className="px-6 py-4">
                        <div className="px-6 py-4">{order.orderStatus}</div>
                      </div>
                      <div className="px-6 py-4">
                        <div className="px-6 py-4">$ {totalPrice}.00</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

const titleClassNames = {
  container: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-black mt-5",
  trending: "flex flex-col sm:flex-row items-center justify-between",
  trendingTitle: "text-2xl md:text-4xl mb-3 md:mb-5",
};
