export default function Heading({ text, color, size, weight, align, customSize }) {
  const getColorClass = (color) => {
    switch (color) {
      case 'black':
        return 'text-black';
      case 'taupe':
        return 'text-[#6F6459]';
      case 'yellow_gold':
        return 'text-[#866C5D]'
      case 'white':
        return 'text-white';
      default:
        return 'text-black'; // default color
    }
  };

  const getSizeClass = (size) => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-2xl';
      case 'large':
        return 'text-3xl';
      case 'xlarge':
        return 'text-4xl';
      case 'custom':
        return customSize ? `text-[${customSize}px]` : 'text-3xl'; // Use custom size if provided
      default:
        return 'text-3xl'; // default size
    }
  };

  const getWeightClass = (weight) => {
    switch (weight) {
      case 'thin':
        return 'font-thin';
      case 'light':
        return 'font-light';
      case 'normal':
        return 'font-normal';
      case 'medium':
        return 'font-medium';
      case 'semibold':
        return 'font-semibold';
      case 'bold':
        return 'font-bold';
      case 'extrabold':
        return 'font-extrabold';
      case 'black':
        return 'font-black';
      default:
        return 'font-normal'; // default weight
    }
  };

  const getAlignClass = (align) =>{

    switch(align){
      case 'none':
        return '';
      default:
        return 'text-center'
    }

  };

  const colorClass = getColorClass(color);
  const sizeClass = getSizeClass(size);
  const weightClass = getWeightClass(weight);
  const alignClass = getAlignClass(align);

  return <h2 className={`${alignClass} ${colorClass} ${sizeClass} ${weightClass}`}>{text}</h2>;
}
