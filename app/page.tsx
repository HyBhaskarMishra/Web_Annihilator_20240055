import PatientForm from "@/components/forms/PatientForm";
import PassKeyModal from "@/components/PassKeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <>
      <div className="flex h-screen max-h-screen">
        {isAdmin && <PassKeyModal />}
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <div className="text-2xl font-bold text-green-500 mb-10">
              CampusCare
            </div>
            <PatientForm />

            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 CampusCare - MNNIT
              </p>

              <Link href="/?admin=true" className="text-green-500">
                Admin
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
