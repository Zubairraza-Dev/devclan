import { employees } from "@/data/employees";
import Image from "next/image";

const Team = () => {
  return (
    <div className="container mx-auto py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Our Core Team</h1>
      <div className="grid grid-cols-2  sm:grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {employees.map((employee) => (
          <div key={employee.id} className="flex flex-col items-center">
            <Image
              src={employee.image}
              alt={`${employee.name} image`}
              height={180}
              width={180}
              style={{ borderRadius: 90 }}
            />
            <p
              style={{ textAlign: "center" }}
              className="mt-4 text-lg font-semibold"
            >
              {employee.name}
            </p>
            <p style={{ textAlign: "center" }} className="text-gray-600">
              {employee.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
