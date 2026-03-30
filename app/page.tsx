import Header from "@/components/layout/Header";

export default function DashboardPage() {
  return (
    <>
      <Header
        title="Dashboard"
      />

      <div className="p-4 xl:px-8 xl:py-7">
        <div className="p-5 bg-card-bg rounded-xl shadow-sm overflow-hidden space-y-3">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </>
  );
}