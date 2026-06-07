import type { ChildrenProps } from '../types/children';

const Container = ({ children }: ChildrenProps) => {
   return <div className="mx-auto max-w-5xl p-4 md:p-8">{children}</div>;
};

export default Container;
