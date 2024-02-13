type SmoothScrollFunction = (id: string, offset?: number, duartion?: number) => void;
interface reactFcWithSmoothScrollFunction {
    smoothScroll: SmoothScrollFunction
}
 export default reactFcWithSmoothScrollFunction