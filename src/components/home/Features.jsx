export const Features = () => {
  return (
    <div className="w-full h-screen flex items-center px-6 md:px-24">
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className="flex-1 flex flex-col justify-center gap-6">
          <p className="text-white text-5xl md:text-6xl font-semibold">
            Property Features
          </p>
          <p className="text-neutral-300 text-lg font-normal max-w-[420px]">
            Discover the key features that make Greenwood Villa a modern and
            comfortable home.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: "🏠",
                title: "Modern Design",
                description:
                  "Contemporary design with clean lines and open spaces",
              },
              {
                icon: "🌳",
                title: "Garden & Terrace",
                description: "Private outdoor space with beautiful landscaping",
              },
              {
                icon: "🚗",
                title: "Parking Space",
                description:
                  "Secure parking for 2 vehicles with electric charging",
              },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{feature.icon}</span>
                </div>
                <div>
                  <p className="text-white text-lg font-semibold">
                    {feature.title}
                  </p>
                  <p className="text-neutral-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          {[
            {
              title: "Energy Efficiency",
              items: ["Solar Panels", "Smart Home System", "LED Lighting"],
            },
            {
              title: "Security Features",
              items: ["24/7 Monitoring", "Smart Locks", "Motion Sensors"],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <p className="text-white text-xl font-semibold mb-3">
                {card.title}
              </p>
              <div className="space-y-2">
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-neutral-300"
                  >
                    <span>{item}</span>
                    <span className="text-white font-semibold">✓</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
