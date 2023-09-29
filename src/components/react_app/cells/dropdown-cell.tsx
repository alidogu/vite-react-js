import {
  CustomCell,
  ProvideEditorCallback,
  CustomRenderer,
  getMiddleCenterBias,
  useTheme,
  GridCellKind,
} from "@glideapps/glide-data-grid";
import * as React from "react";
import Select, { MenuProps, components } from "react-select";

interface CustomMenuProps extends MenuProps<any> {}

const CustomMenu: React.FC<CustomMenuProps> = (p: any) => {
  const { Menu } = components;
  const { children, ...rest } = p;
  return <Menu {...rest}>{children}</Menu>;
};

interface DropdownCellProps {
  readonly kind: "dropdown-cell";
  readonly value: string;
  readonly allowedValues: readonly any[];
  readonly readonly?: boolean;
}

export type DropdownCell = CustomCell<DropdownCellProps>;

const Editor: ReturnType<ProvideEditorCallback<DropdownCell>> = (p) => {
  const { value: cell, onFinishedEditing, initialValue } = p;
  const { allowedValues, value: valueIn, readonly } = cell.data;

  const [value, setValue] = React.useState(valueIn);
  const [inputValue, setInputValue] = React.useState(initialValue ?? "");

  const theme = useTheme();

  const selectRef = React.useRef();
  const onMenuOpen = () => {
    // known issue where the reference to the menuList doesn't exist yet
    // so a `useTimeout` is necessary to wait for the event queue.
    setTimeout(() => {
      selectRef?.current?.focusedOptionRef?.scrollIntoView();
    }, 500);
  };

  const values = React.useMemo(
    () =>
      allowedValues.map((x) => ({
        value: x.value?.toString(),
        label: x.label?.toString(),
      })),
    [allowedValues]
  );

  return (
    <Select
      ref={selectRef}
      className="glide-select"
      inputValue={inputValue}
      onInputChange={setInputValue}
      menuPlacement={"auto"}
      value={values.find((x) => x.value.toString() === value?.toString())}
      menuIsOpen={!readonly}
      isClearable={!readonly}
      isSearchable={!readonly}
      openMenuOnClick={readonly ? false : undefined}
      isDisabled={readonly ? true : undefined}
      styles={{
        control: (base) => ({
          ...base,
          border: 0,
          boxShadow: "none",
        }),
      }}
      theme={(t) => {
        return {
          ...t,
          colors: {
            ...t.colors,
            neutral0: theme.bgCell, // this is both the background color AND the fg color of
            // the selected item because of course it is.
            neutral5: theme.bgCell,
            neutral10: theme.bgCell,
            neutral20: theme.bgCellMedium,
            neutral30: theme.bgCellMedium,
            neutral40: theme.bgCellMedium,
            neutral50: theme.textLight,
            neutral60: theme.textMedium,
            neutral70: theme.textMedium,
            neutral80: theme.textDark,
            neutral90: theme.textDark,
            neutral100: theme.textDark,
            primary: theme.accentColor,
            primary75: theme.accentColor,
            primary50: theme.accentColor,
            primary25: theme.accentLight, // prelight color
          },
        };
      }}
      menuPortalTarget={document.getElementById("portal")}
      autoFocus={true}
      openMenuOnFocus={true}
      onMenuOpen={onMenuOpen}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
        Menu: (props) => (
          <CustomMenu className={"click-outside-ignore"} {...props} />
        ),
      }}
      options={values}
      onChange={async (e) => {
        if (e === null) return;
        setValue(e.value);
        await new Promise((r) => window.requestAnimationFrame(r));
        onFinishedEditing({
          ...cell,
          data: {
            ...cell.data,
            value: e.value,
          },
        });
      }}
    />
  );
};

const renderer: CustomRenderer<DropdownCell> = {
  kind: GridCellKind.Custom,
  isMatch: (c): c is DropdownCell => (c.data as any).kind === "dropdown-cell",
  draw: (args, cell) => {
    const { ctx, theme, rect } = args;
    let { value, allowedValues } = cell.data;
    //console.log("renderer", value, "allowedValues", allowedValues);
    if (value === undefined) value = "";
    const label =
      allowedValues?.find((x: any) => x.value.toString() === value?.toString())
        ?.label || "";

    ctx.fillStyle = theme.textDark;
    ctx.fillText(
      label,
      rect.x + theme.cellHorizontalPadding,
      rect.y + rect.height / 2 + getMiddleCenterBias(ctx, theme)
    );
    return true;
  },
  provideEditor: () => ({
    editor: Editor,
    disablePadding: true,
    deletedValue: (v) => ({
      ...v,
      copyData: "",
      data: {
        ...v.data,
        value: "",
      },
    }),
  }),
  onPaste: (v, d) => {
    console.log('aaaa',v, d)
    if (!d.readonly) {
      const findValue = d.allowedValues?.find(
        (x: any) =>
          x.value.toString() == v ||
          x.label.toLocaleLowerCase() == v.toLocaleLowerCase()
      );
      return {
        ...d,
        value: findValue ? findValue.value : 0,
      };
    }
  },
};

export default renderer;
