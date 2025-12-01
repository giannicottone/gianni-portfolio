'use client';
export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input name="name" placeholder="Name" className="border p-2 w-full" />
      <input name="email" placeholder="Email" className="border p-2 w-full" />
      <textarea name="message" placeholder="Message" className="border p-2 w-full" />
      <input name="honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <button className="bg-black text-white px-4 py-2 rounded">
       {'Send'}
      </button>
    </form>
  );
}
