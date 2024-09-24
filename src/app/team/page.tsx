import { employees } from "@/data/employees";
import Image from "next/image";

const Team = () => {
  return (
    <div className="container mx-auto py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-2  sm:grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {employees.map((employee) => (
          <div key={employee.id} className="flex flex-col items-center">
            <Image
              src={employee.image}
              alt={`${employee.name} image`}
              height={240}
              width={240}
            />
            <p className="mt-4 text-lg font-semibold">{employee.position}</p>
            <p className="text-gray-600">{employee.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
