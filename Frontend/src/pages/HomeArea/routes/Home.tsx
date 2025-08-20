import illustration1 from "@/assets/illustration1.svg"
import { RollingText } from "@/components/animate-ui/text/rolling"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

function HomeHeader() {
  return (
    <div className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 px-2 md:p-10">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-5xl uppercase">
          <span className="font-bold">Find Your </span>
          <br />
          <RollingText className="text-3xl md:text-4xl" text="Dream Product" />
        </h2>
      </div>
      <div className="flex flex-row flex-wrap  justify-center mt-20 gap-10 text-2xl font-semibold ">
        <Card className="rounded-2xl cursor-pointer text-center border-indigo-500 text-indigo-500">
          <CardContent className="my-auto">
            Clothes
          </CardContent>
        </Card>
        <Card className="rounded-2xl cursor-pointer text-center border-purple-400 text-purple-400">
          <CardContent className="my-auto">
            Furniture
          </CardContent>
        </Card>
        <Card className="rounded-2xl cursor-pointer text-center border-purple-500 text-purple-500">
          <CardContent className="my-auto">
            Electronics
          </CardContent>
        </Card>
        <Card className="rounded-2xl cursor-pointer text-center border-pink-400 text-pink-400">
          <CardContent className="my-auto">
            Shoes
          </CardContent>
        </Card>
        <Card className="rounded-2xl cursor-pointer text-center border-pink-500 text-pink-500">
          <CardContent className="my-auto">
            Miscellaneous
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function HomeContent() {
  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 p-5 mb-10">
      <div className="text-center pt-5 mb-10 space-y-10">
        <h2 className="text-4xl font-semibold">Featured Products</h2>
        <span>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          <br />
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="md:w-2xl">
          <h5 className="text-xl font-bold">Nice Design</h5>
          <p className="mt-2 text-gray-600">Discover the beauty of our curated collection.</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>
          <FeatureCard />
          <FeatureCard />
        </div>
        <div className="w-3xs md:w-xs md:self-end">
          <img src={illustration1} alt={"illustration 1"} />
        </div>
      </div>
    </div>
  )
}

function FeatureCard() {
  return (
    <Card className="text-center md:w-lg mt-5 border-violet-500 border-2 shadow-md shadow-violet-500">
      <CardHeader className="font-bold text-2xl">Feature</CardHeader>
      <CardContent className="my-auto">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeContent />
    </>
  )
}
