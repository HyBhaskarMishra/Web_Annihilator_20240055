import AppointmentForm from "@/components/forms/AppointmentForm";
import PatientForm from "@/components/forms/PatientForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({
  params: { userId },
}: SearchParamProps) {
  const patient = await getPatient(userId);
  return (
    <>
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[800px]">
            <div className="text-2xl font-bold text-green-500 mb-10">
              CampusCare
            </div>

            {
              <AppointmentForm
                type="create"
                userId={userId}
                patientId={patient.$id}
              />
            }
          </div>
        </section>
      </div>
    </>
  );
}
