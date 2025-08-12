export default function Education() {
  const educationList = [
    {

      id: 1,
      degree: 'Computer Science Engineering',
      institution: ' Dhaka polytechnic Institute ,Dhaka, Bangladesh .',
      year: '2022 - 2026',
      details: 'Computer Science and Technology',
    },
        {
      id: 2,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Hazi Abdul Quddus School and collage,brahmanbaria',
      year: '2019 - 2021',
      details: 'Science Group.',
    },
  ];

  return (
        <section id="education" className="max-w-full mx-auto my-10 p-6 bg-gray-50 rounded text-center">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {educationList.map(({ id, degree, institution, year, details }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-1">Name :Jahidul islam</h3>
            <h3 className="text-xl font-semibold mb-1">degree :{degree}</h3>
            <p className="text-gray-700 italic">institution :{institution}</p>
            <p className="text-gray-600 text-sm">year :{year}</p>
            <p className="mt-3 text-gray-700"> details :{details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
