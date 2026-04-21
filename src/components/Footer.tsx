import { CONTACT_INFO, SITE_METADATA } from "../constants";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-border w-full px-8 md:px-[6%]">
      <div className="flex flex-col items-center gap-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
            © 2024 {SITE_METADATA.name}. All Rights Reserved.
          </p>
          
          <div className="flex gap-8">
            {["LinkedIn", "GitHub", "Behance"].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
            {CONTACT_INFO.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
