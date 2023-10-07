import { useEffect, useState } from "react";
import { Button, Input, Modal } from "../components";
import { addToCategory, removeFromCategory } from "../server";

export const CategoryList = () => {
  let categories: string[] = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>(categories);
  const [deleteContent, setDeleteContent] = useState<{
    show: boolean;
    content: React.ReactNode;
    index: number;
  }>({ show: false, content: <></>, index: 0 });

  const handleAdd = () => {
    if (value && value?.length > 0) {
      addToCategory(value);
      setValue("");
    }
  };

  const handleDeleteSuccess = () => {
    removeFromCategory(deleteContent.index);
    setDeleteContent({ show: false, content: <></>, index: 0 });
  };

  const handleDeleteContent = (content: string, index: number) => {
    let cont = (
      <div className="delete-content">
        <ul>
          <li>{content} will be removed</li>
          <li>All expense with this category will also be removed</li>
        </ul>
        <span>Do you really want to remove?</span>
      </div>
    );
    setDeleteContent({ show: true, index, content: cont });
  };

  useEffect(() => {
    if (list?.length !== categories.length) setList(categories);
    //eslint-disable-next-line
  }, [categories]);

  const List: React.FC = () => {
    if (list?.length === 0 || list?.length === undefined)
      return <div className="none">No categories added yet</div>;
    else
      return (
        <div className="list">
          {list?.map((item, index) => {
            return (
              <div key={index} className="list-item">
                <span>{item}</span>
                <span
                  className="close"
                  onClick={() => handleDeleteContent(item, index)}
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
      );
  };

  return (
    <>
      <div className="category-listing">
        <List />
        <Input value={value} onChange={setValue} onEnter={handleAdd} />
        <Button text="Add" onClick={handleAdd} />
      </div>
      {deleteContent.show && (
        <Modal
          content={deleteContent.content}
          onCancel={() => {
            setDeleteContent({ show: false, content: <></>, index: 0 });
          }}
          onConfirm={() => {
            handleDeleteSuccess();
          }}
        />
      )}
    </>
  );
};
