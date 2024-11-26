import type { MetaFunction } from "@remix-run/node";
import { Button, Form, FormControl } from "react-bootstrap";
import { PiTruckFill } from "react-icons/pi";
import { PiPackageLight } from "react-icons/pi";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <header className="flex flex-row justify-between items-center  gap-9 h-20 w-full mx-auto px-8 border-b-2 ">
          <div className="flex flex-row gap-7 justify-center items-center">
            <h1 className="leading text-2xl font-bold">Loader</h1>
            <nav>
              <ul className="flex flex-row gap-2">
                <li className="font-bold">Pickup</li>
                <li className="font-bold">Hire</li>
                <li className="font-bold">Driver</li>
                <li className="font-bold">About</li>
              </ul>
            </nav>
          </div>
          <div>
            <ul className="flex flex-row gap-2 items-center">
              <li>help?</li>
              <li>Login</li>
              <li>
                <Button variant="dark">Sign Up</Button>
              </li>
            </ul>
          </div>
        </header>
        <main className="max-w-[1280px] mb-5">
          <div className="grid grid-cols-2 items-center justify-center p-[64px]">
            <div className="col-span-1 ">
              <div className="flex flex-col justify-center ">
                <div className="flex flex-row">
                  <h1 className="font-bold text-6xl">
                    take a work with <br />
                    Loader
                  </h1>
                </div>
                <div className="flex flex-row gap-10 self-start my-6">
                  <div className="flex flex-col items-start">
                    <PiTruckFill size={36} className="bg-gray-200 rounded-sm" />
                    <h5 className="font-bold mt-2">Hire</h5>
                  </div>
                  <div className="flex flex-col ">
                    <PiPackageLight
                      size={36}
                      className="bg-gray-200 rounded-sm"
                    />
                    <h5 className="font-bold mt-2">Load</h5>
                  </div>
                </div>
                <div className="flex flex-col self-start gap-3 justify-center">
                  <Form>
                    <FormControl
                      required
                      type="text"
                      placeholder="Pickup Location"
                      className="my-3 pr-28 border-none bg-slate-100"
                    />
                    <FormControl
                      required
                      type="text"
                      placeholder="Dropoff Location"
                      className="my-3 pr-28 border-none bg-slate-100"
                    />
                    <Button type="submit" variant="dark">
                      See Loads
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
            <div className="col-span-1 border h-full w-fulls">
              <div className="text-center">MAP</div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Suggetions</h1>
            <div className="grid grid-cols-3 mt-9 gap-2">
              <div className="col-span-1 bg-gray-200 rounded-sm">
                <div className="grid grid-cols-3 px-2 py-1">
                  <div className="col-span-2">
                    <h5 className="text-lg font-semibold">Ride</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tenetur, deleniti.
                    </p>
                    <Button variant="light">Details</Button>
                  </div>
                  <div className="col-span-1">
                    <img
                      src="/vehicle.png"
                      alt=""
                      className="object-fit h-[128px] w-[128px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-gray-200 rounded-sm">
                <div className="grid grid-cols-3 px-2 py-1">
                  <div className="col-span-2">
                    <h5 className="text-lg font-semibold">Reserve</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tenetur, deleniti.
                    </p>
                    <Button variant="light">Details</Button>
                  </div>
                  <div className="col-span-1">
                    <img
                      src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                      alt=""
                      className="object-fit h-[128px] w-[128px]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-gray-200 rounded-sm">
                <div className="grid grid-cols-3 px-2 py-1">
                  <div className="col-span-2 gap-2">
                    <h5 className="text-lg font-semibold">Ride</h5>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Tenetur, deleniti.
                    </p>
                    <Button variant="light">Details</Button>
                  </div>
                  <div className="col-span-1">
                    <img
                      src="/vehicle.png"
                      alt=""
                      className="object-fit h-[128px] w-[128px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
