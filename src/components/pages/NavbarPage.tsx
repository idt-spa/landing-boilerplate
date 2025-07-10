import { Navbar } from "@/components/organisms/Navbar";

export default function NavbarPage() {
  return (
    <div className="flex flex-col gap-10 pt-10">
      <section className={"relative"}>
        <Navbar />
      </section>
    </div>
  )
}