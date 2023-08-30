import * as React from "react";
import DataEditor, {
  GridCellKind,
  useCustomCells,
  CompactSelection,
} from "@glideapps/glide-data-grid";
import { useLayer } from "react-laag";
import DropdownCellRenderer from "./cells/dropdown-cell";
import ButtonCellRenderer from "./cells/button-cell";

import "@glideapps/glide-data-grid/dist/index.css";

import { useVueHooksInReact } from "../gridstore";

export default function Grid(props) {
  const cells = [
    DropdownCellRenderer,
    ButtonCellRenderer,
    // DatePickerRenderer,
  ];

  const { gridStore } = useVueHooksInReact();
  // console.log("getContent gridStore", gridStore.GridData);
  // console.log("getContent gridStore props", props);

  // gridStore.test = () => {
  //   const randomRow1 = 0
  //   const randomRow2 = 2
  //   GridRef.current?.updateCells([randomRow1, randomRow2].map(r => ({ cell: [9, r] })));
  // }

  const cellProps = useCustomCells(cells);
  const GridRef = React.useRef(null);

  React.useEffect(() => {
    onUpdatePageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.settings.test1]);

  const getContent = React.useCallback((cell) => {
    // props.onUpdatedata();

    // console.log(
    //   "getContent modelValue",
    //   props.modelValue.length > 0 ? props.modelValue[0].Total : props
    // );
    ///console.log("getContent gridStore", gridStore);
    // console.log(
    //   "getContent GridData",
    //   gridStore.GridData.length > 0
    //     ? gridStore.GridData[0].Total
    //     : gridStore.GridData
    // );
    const [col, row] = cell;
    const indexes = props.columns.map((x) => x.name || x.key); //["name", "company", "email","Category", "phone"];
    const column = props.columns[col];
    //console.log('cell column',column)
    const Type = column.type;
    const ReadOnly = column.readonly ?? true;
    let theme = undefined;
    //if (col === 1 && row === 1) {
    // theme = {
    //   textDark: "blue",
    // };
    //}

    //console.log('Type',Type)
    if (Type === "select" || Type === "dropdown" || Type === "checkbox") {
      const selectSource = props.columns[col].source;
      const dataRow = gridStore.GridData[row];

      let dataValue = "";
      let copyDataValue = "";
      if (dataRow[indexes[col]] !== undefined) {
        dataValue = dataRow[indexes[col]]?.toString();
        copyDataValue =
          selectSource?.find((x) => x.value.toString() === dataValue)?.label ||
          "";
      }

      //console.log("dataValue", dataValue, dataRow);

      return {
        kind: GridCellKind.Custom,
        allowOverlay: true,
        copyData: copyDataValue,
        themeOverride: theme,
        data: {
          kind: "dropdown-cell",
          allowedValues: selectSource,
          value: dataValue,
          readonly: ReadOnly,
        },
      };
    } else if (Type === "button") {
      const dataRow = gridStore.GridData[row];

      const dataValue = dataRow[indexes[col]];

      theme = {
        baseFontStyle: "700 12px",
      };
      return {
        kind: GridCellKind.Custom,
        cursor: "pointer",
        allowOverlay: true,
        copyData: "",
        readonly: true,
        themeOverride: theme,
        data: {
          kind: "button-cell",
          backgroundColor: ["white", "#9155fd"],
          color: ["accentColor", "accentFg"],
          borderColor: "#9155fd",
          borderRadius: 9,
          title: column.buttontitle || "Detay",
          onClick: () => column.Clicked(dataValue),
        },
      };
    } else if (Type === "bool" || Type === "boolen") {
      const dataRow = gridStore.GridData[row];
      //console.log("bool", typeof dataRow[indexes[col]]);
      let dataValue = false;
      if (typeof dataRow[indexes[col]] === "boolean") {
        dataValue = dataRow[indexes[col]];
      } else if (dataRow[indexes[col]] == 1) dataValue = true;
      else dataValue = false;

      theme = {
        textLight: "green",
      };

      return {
        kind: GridCellKind.Boolean,
        data: dataValue,
        allowOverlay: false,
        themeOverride: theme,
        readonly: ReadOnly,
      };
    } else if (Type === "number" || Type === "int") {
      const dataRow = gridStore.GridData[row];
      let dataValue = dataRow[indexes[col]] || 0;
      //console.log("dataValue", dataValue);

      let dataValueFormat = dataValue;
      const CheckDotComma =
        dataValue.toString().includes(".") &&
        dataValue.toString().includes(",");
      const CheckComma = dataValue.toString().includes(",");
      if (CheckDotComma) {
        dataValue = dataValueFormat.replace(".", "").replace(",", ".");
        dataValueFormat = dataValueFormat.replace(".", "").replace(",", ".");
        //console.log("CheckDotComma çalıştı", dataValueFormat);
      } else if (CheckComma) {
        dataValue = dataValueFormat.replace(".", "").replace(",", ".");
        dataValueFormat = dataValueFormat.replace(".", "").replace(",", ".");
      }

      // console.log("CheckDotComma", CheckDotComma);
      const formatter = new Intl.NumberFormat("tr-TR", {});
      const numberFormat = formatter.format(dataValueFormat || 0);

      return {
        kind: GridCellKind.Text,
        copyData: dataValue,
        displayData: numberFormat,
        allowOverlay: true,
        data: dataValue,
        readonly: ReadOnly,
        themeOverride: theme,
      };
    } else if (Type === "money") {
      const dataRow = gridStore.GridData[row];
      let dataValue = dataRow[indexes[col]] || 0;
      //console.log("dataValue", dataValue);

      let dataValueFormat = dataValue;
      const CheckDotComma =
        dataValue.toString().includes(".") &&
        dataValue.toString().includes(",");
      const CheckComma = dataValue.toString().includes(",");
      if (CheckDotComma) {
        dataValue = dataValueFormat.replace(".", "").replace(",", ".");
        dataValueFormat = dataValueFormat.replace(".", "").replace(",", ".");
        //console.log("CheckDotComma çalıştı", dataValueFormat);
      } else if (CheckComma) {
        dataValue = dataValueFormat.replace(".", "").replace(",", ".");
        dataValueFormat = dataValueFormat.replace(".", "").replace(",", ".");
      }

      // console.log("CheckDotComma", CheckDotComma);
      const PriceFormater = new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      });

      const currencyFormat = PriceFormater.format(dataValueFormat || 0);

      return {
        kind: GridCellKind.Text,
        copyData: currencyFormat,
        displayData: currencyFormat,
        allowOverlay: true,
        data: dataValue,
        readonly: ReadOnly,
        themeOverride: theme,
      };
    } else {
      const dataRow = gridStore.GridData[row];

      const dataValue = dataRow[indexes[col]] || "";
      //console.log('ReadOnly',ReadOnly)
      return {
        kind: GridCellKind.Text,
        allowOverlay: true,
        readonly: ReadOnly,
        copyData: dataValue.toString(),
        displayData: dataValue.toString(),
        data: dataValue.toString(),
      };
    }
  }, []);

  const getRowThemeOverride = React.useCallback((row) => {
    return props.themeoverride(row);
  }, []);

  const selectedColumns = React.useState(CompactSelection.empty());
  const [gridSelection, setgridSelection] = React.useState(
    GridRef.gridSelection
  );

  const onGridSelectionChange = React.useCallback(
    (s) => {
      setgridSelection(s);
      GridRef.onGridSelectionChange?.(s);
      // console.log("onGridSelectionChange selectedColumns", s);
      let SelectedIndex = [];
      s?.rows?.items.map((x) => {
        let first = x[0];
        let second = x[1];
        let fark = second - first;

        if (fark === 1) SelectedIndex.push(first);

        if (fark > 1) {
          for (let i = 0; i < fark; i++) {
            SelectedIndex.push(first + i);
          }
        }
        return SelectedIndex;
      });
      //console.log("x SelectedIndex", SelectedIndex);
      props.selected(SelectedIndex);
    },
    [GridRef]
  );

  const onSelectedColumnsChange = React.useCallback((newVal, trigger) => {
    //console.log("onSelectedColumnsChange 222", newVal, trigger);
    if (trigger === "group") return;
  }, []);

  const onSelected = React.useCallback((newSel) => {
    //console.log("onSelectedColumnsChange 3", newSel);
  }, []);

  /* const onSelectedColumnsChange = React.useCallback((newVal, trigger) => {
    if (trigger === "group") return;
    console.log("onSelectedColumnsChange 2", newVal, "trigger", trigger);
  }, []); */

  /* const onSelectedColumnsChange = React.useCallback((cell, event) => {
    console.log("onSelectedColumnsChange", cell, "event", event);
    props.selected(cell, event);
  });
 */
  const onCellClicked = React.useCallback((cell, event) => {
    //console.log("onCellClicked GridRef", props, GridRef);
    GridRef.current.emit("onUpdate:modelValue", "bbb");

    props.clicked(cell, event);
  });

  const onHeaderClicked = React.useCallback((cell, event) => {
    //console.log("onHeaderClicked cell", cell, event);
    props.headerclicked(cell, event);
  });

  const onCellEdited = React.useCallback((cell, newValue) => {
    // console.log("onCellEdited", cell, "useCallback", newValue);
    if (newValue.kind === GridCellKind.Custom) {
      //console.log("cell Custom", cell, "useCallback", newValue);
      const indexes = props.columns.map((x) => x.id); //["name", "company", "email", "phone"];
      const [col, row] = cell;
      const key = indexes[col];
      gridStore.GridData[row][key] = newValue.data.value;
      props.update({ cell, old: newValue.copyData, new: newValue.data.value });
      return;
    }

    // if (newValue.kind !== GridCellKind.Text) {
    //   // we only have text cells, might as well just die here.
    //   return;
    // }

    //console.log("cell", cell, "EditableGridCell", newValue);
    const indexes = props.columns.map((x) => x.id); //["name", "company", "email", "phone"];
    const [col, row] = cell;
    const key = indexes[col];
    gridStore.GridData[row][key] = newValue.data;
    props.update({ cell, old: newValue.displayData, new: newValue.data });
  }, []);

  const drawHeader = React.useCallback((args) => {
    const { ctx, rect } = args;
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    const lg = ctx.createLinearGradient(0, rect.y, 0, rect.y + rect.height);
    lg.addColorStop(0, "#ff00d934");
    lg.addColorStop(1, "#00a2ff34");
    ctx.fillStyle = lg;
    ctx.fill();
    return false;
  }, []);

  const onUpdatePageData = () => {
    /*  const randomRow1 = 0
    const randomRow2 = gridStore.GridData.length - 1; */
    let cells = gridStore?.GridData?.map((x, r) =>
      Array.from({ length: props?.columns?.length || 1 }, (x, c) => ({
        cell: [c, r],
      }))
    ).flat();

    //console.log("cells", cells);
    GridRef.current?.updateCells(
      cells
      // [randomRow1,1, randomRow2].map((cellindex) => ({ cell: [9, cellindex] }))
    );
  };

  const headerIcons = React.useMemo(() => {
    return {
      "sort-asc": (p) =>
        `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M232.5 96.5a12 12 0 0 1-17 0L196 77v67a12 12 0 0 1-24 0V77l-19.5 19.5a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17l40-40h.1l.8-.8l.4-.3l.5-.4l.6-.3l.4-.3l.6-.2l.5-.3l.5-.2l.6-.2h.6l.6-.2h4.6l.6.2h.6l.5.2l.6.2l.5.2l.6.3l.4.3l.6.3l.4.4l.5.3l.8.7a.1.1 0 0 0 .1.1l40 40a12 12 0 0 1 0 17ZM48 140h72a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24Zm0-64h56a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24Zm136 104H48a12 12 0 0 0 0 24h136a12 12 0 0 0 0-24Z"/></svg>`,
      "sort-desc": (p) =>
        `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="m232.5 176.5l-40 40h-.1l-.8.7l-.4.3l-.5.4l-.6.3l-.4.3l-.6.2l-.5.3l-.5.2l-.6.2h-.6l-.6.2h-4.6l-.6-.2h-.6l-.6-.2l-.5-.2l-.5-.3l-.6-.2l-.4-.3l-.6-.3l-.5-.4l-.4-.3l-.8-.8h-.1l-40-40a12 12 0 0 1 17-17L172 179v-67a12 12 0 0 1 24 0v67l19.5-19.5a12 12 0 0 1 17 17ZM120 116H48a12 12 0 0 0 0 24h72a12 12 0 0 0 0-24ZM48 76h136a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24Zm56 104H48a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24Z"/></svg>`,
    };
  }, []);

  const [tooltip, setTooltip] = React.useState();

  const timeoutRef = React.useRef(0);

  const onItemHovered = React.useCallback((args) => {
    if (args.kind === "cell") {
      // console.log("onItemHovered", args);
      // console.log(
      //   "onItemHovered data",
      //   getContent([args.location[0], args.location[1]])
      // );
      // console.log("onItemHovered columns", props.columns[args.location[0]].name);
      const getCellData = getContent([args.location[0], args.location[1]]);
      const CellTitle = getCellData.displayData || getCellData.copyData;
      if (CellTitle) {
        window.clearTimeout(timeoutRef.current);
        setTooltip(undefined);
        timeoutRef.current = window.setTimeout(() => {
          setTooltip({
            val: `${CellTitle} `,
            bounds: {
              // translate to react-laag types
              left: args.bounds.x,
              top: args.bounds.y,
              width: args.bounds.width,
              height: args.bounds.height,
              right: args.bounds.x + args.bounds.width,
              bottom: args.bounds.y + args.bounds.height,
            },
          });
        }, 200);
      }
    } else {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = 0;
      setTooltip(undefined);
    }
  }, []);

  React.useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const isOpen = tooltip !== undefined;
  const { renderLayer, layerProps } = useLayer({
    isOpen,
    triggerOffset: 4,
    auto: true,
    container: "portal",
    trigger: {
      getBounds: () => tooltip?.bounds ?? zeroBounds,
    },
  });

  return (
    <>
      <DataEditor
        {...cellProps}
        /* selectedColumns={selectedColumns} */
        gridSelection={gridSelection}
        ref={GridRef}
        onItemHovered={onItemHovered}
        theme={props.theme}
        rowMarkers="both"
        onPaste={true}
        width={props.settings.width || 1800}
        fillHandle={true}
        overscrollX={0}
        overscrollY={0}
        keybindings={{ search: true }}
        rowHeight={props.settings.rowHeight || 25}
        freezeColumns={props.settings.freezeColumns || 0}
        onCellClicked={onCellClicked}
        onHeaderClicked={onHeaderClicked}
        onGridSelectionChange={onGridSelectionChange}
        getRowThemeOverride={getRowThemeOverride}
        /*  onColumnResize={onColumnResize} */
        drawHeader={drawHeader}
        headerIcons={headerIcons}
        getCellsForSelection={true}
        getCellContent={getContent}
        onCellEdited={onCellEdited}
        columns={props.columns}
        rows={gridStore.GridData.length}
      />
      {isOpen &&
        renderLayer(
          <div
            {...layerProps}
            style={{
              ...layerProps.style,
              padding: "8px 12px",
              color: "white",
              font: "500 13px Inter",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              borderRadius: 9,
            }}
          >
            {tooltip.val}
          </div>
        )}
      <div id="portal" />
    </>
  );
}
