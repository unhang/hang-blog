const Underline = ({ char }: { char: string }) => {
    return (
        <span className='bg-[#77FF00] h-[8px] w-[48px] md:w-[96px] absolute bottom-[24px] md:bottom-[32px] left-[17%] md:left-[96px] z-[-1]'>{char}</span>
    );
}

export default Underline;
