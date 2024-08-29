import React from 'react';

const RichTextRenderer = ({ blocks }) => {
  const extractColorAndText = (input) => {
    const regex = /^(\w+)>>>([\s\S]*)$/; // Regular expression to match word before >>> and capture the rest
    const match = input.match(regex); // Apply the regex to the input string
    if (match) {
      return {
        color: match[1],    // The first capturing group is the color
        text: match[2].trim() // The second capturing group is the remaining string, trimmed of any extra spaces
      };
    }

    return {
      color: '',             // If no match is found, return empty values
      text: input.trim()     // If no color is found, return the entire string as text
    };
  };

  const renderChildren = (children) => {
    return children.map((child, index) => {
      let content = child.text;

      // Handle different text styles
      if (child.bold) {
        content = <strong key={index}>{content}</strong>;
      }
      if (child.italic) {
        content = <em key={index}>{content}</em>;
      }
      if (child.code) {
        content = <code key={index}>{content}</code>;
      }
      if (child.url && child.type === 'link') {
        content = (
          <a href={child.url} key={index} target="_blank" rel="noopener noreferrer">
            {child.children ? renderChildren(child.children) : content}
          </a>
        );
      }

      return content;
    });
  };

  const renderListItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>{renderChildren(item.children)}</li>
    ));
  };

  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.level}`;
        return <HeadingTag key={index}>{renderChildren(block.children)}</HeadingTag>;

      case 'paragraph':
        const paraDetails = extractColorAndText(block.children[0].text);
        const pStyle = paraDetails.color ? { color: paraDetails.color } : {};
        const childrenClone = JSON.parse(JSON.stringify(block.children)); // Deep clone the children array
        childrenClone[0].text = paraDetails.text; // Replace the text with the extracted text
        return (
          <p key={index} style={{ ...pStyle }}>
            {renderChildren(childrenClone)}
          </p>
        );

      case 'list':
        return block.format === 'unordered' ? (
          <ul key={index}>{renderListItems(block.children)}</ul>
        ) : (
          <ol key={index}>{renderListItems(block.children)}</ol>
        );
      case 'image':
        const { image } = block;
        return <img key={index} src={image.url} alt={block.name} style={{ width: '100%' }} />;

      // Add more cases for other block types if needed
      default:
        return null;
    }
  };

  if (!blocks && !Array.isArray(blocks)) {
    return null
  }

  return <div>{blocks.map((block, index) => renderBlock(block, index))}</div>;
};

export default RichTextRenderer;