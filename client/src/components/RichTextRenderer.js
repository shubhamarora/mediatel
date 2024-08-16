import React from 'react';

const RichTextRenderer = ({ blocks }) => {
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
        return <p key={index}>{renderChildren(block.children)}</p>;

      case 'list':
        return block.format === 'unordered' ? (
          <ul key={index}>{renderListItems(block.children)}</ul>
        ) : (
          <ol key={index}>{renderListItems(block.children)}</ol>
        );

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