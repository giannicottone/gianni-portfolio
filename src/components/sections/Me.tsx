import Image from "next/image";

const me = <Image
  src="/Me.jpg"
  alt="Gianni Cottone"
  width={400}
  height={500}
  className="rounded-2xl shadow-md"
/>

export default function Me() {
  return (
    <section className="py-20">
      <div className="px-4 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Image */}
        <div className="flex-1 flex justify-center">
        {me}
        </div>
        {/* RIGHT: Content */}
        <div className="flex-1 space-y-6">
          {/* Identity */}
          <div>
            <h2 className="text-section">Hi, I{"'"}m Gianni</h2>
            <p className="text-body">
              Based in New York. [Insert Background Here]
            </p>
          </div>
          {/* Interests */}
          <div>
            <p className="text-muted text-sm uppercase tracking-wide mb-2">
              Interests
            </p>
            <p className="text-body">
              [Insert Interests Here].
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}