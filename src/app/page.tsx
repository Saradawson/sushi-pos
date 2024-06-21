import LoginPage from "./routes/login/loginPage";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <header className="w-full h-1/5"></header>
      <main className="min-w-screen h-3/5">
        <LoginPage></LoginPage>
      </main>
      <footer className="w-full h-1/5"></footer>
    </div>
  );
}
