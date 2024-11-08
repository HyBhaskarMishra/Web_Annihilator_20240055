import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <>
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container ">
          <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
            <div className="text-2xl font-bold text-green-500 mb-10">
              CampusCare
            </div>
            <RegisterForm user={user} />
          </div>
        </section>

        <Image
          src="/assets/images/register-img.png"
          width={1000}
          height={1000}
          alt="patient"
          className="side-img max-w-[400px]"
        />
      </div>
    </>
  );
};

export default Register;
