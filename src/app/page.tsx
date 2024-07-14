import LoginPage from "./routes/login/loginPage";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-pinkFour">
        <Header></Header>
      <main className="min-w-screen h-3/4 pb-8 pt-8">
        <LoginPage></LoginPage>
      </main>
      <Footer></Footer>
    </div>
  );
}
