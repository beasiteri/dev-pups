import type { ChildrenProps } from '../types/children';

const PageWrapper = ({ children }: ChildrenProps) => {
   return (
      <div className="min-h-dvh bg-linear-to-b from-cyan-200 to-white to-[60vh]">
         {children}
      </div>
   );
};

export default PageWrapper;
