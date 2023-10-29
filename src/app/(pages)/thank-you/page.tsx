import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-black mt-20">
      <div className="flex flex-col content-center">
        <div className="flex justify-center">
          <h1 className="text-2xl md:text-4xl mb-3 md:mb-5 ">
            Thank you for your purchase!
          </h1>
        </div>
        <div className="flex justify-center">
          <p>
            You will receive an email at {session.user?.email} with your order
            details.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="mt-8 sm:mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium shadow-sm text-white bg-black hover:bg-yellow-300 sm:px-8 transition-all duration-200">
            <Link href="/">Continue Shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
