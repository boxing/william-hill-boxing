export interface Sport {
    sport_id: string;
    sport_name: string;
    prematch_disporder: string;
    inplay_disporder: string;
}

export interface Type {
    type_id: string;
    type_name: string;
    disporder: string;
}

export interface ComClock {
    state: string;
    period: string;
    time: string;
}

export interface ComScore {
    score_1: string;
    score_2: string;
    comp1_score: string;
    comp2_score: string;
}

export interface Collection {
    collection_id: string;
    expanded: string;
    name: string;
    num_disp_mkt: string;
    primary: string;
}

export interface Market {
    ev_mkt_id: string;
    ev_oc_grp_id: string;
    mkt_sort: string;
    status: string;
    mkt_name: string;
    master_mkt_name: string;
    grp_id: string;
    displayed: string;
    preloaded: string;
    disporder: string;
    expanded: string;
    bir_index: string;
    ew_avail: string;
    ew_places: string;
    ew_fac_num: string;
    ew_fac_den: string;
    hcap_value: string;
    blurb: string;
    col_id: string;
    col_expanded: string;
    col_disporder: string;
    col_name: string;
    bet_in_run: string;
    last_msg_id: string;
    template_name: string;
    template_grp_id: string;
    template_grp_col: string;
    template_num_col: string;
    template_col_header: string;
    disp_sort: string;
    tooltip_visible: string;
    hovertext: string;
}

export interface Selection {
    ev_oc_id: string;
    ev_mkt_id: string;
    lp_num: string;
    lp_den: string;
    ilp_avail: string;
    mkt_bir_index: string;
    mkt_ew_avail: string;
    mkt_ew_places: string;
    mkt_ew_fac_num: string;
    mkt_ew_fac_den: string;
    mkt_hcap_value: string;
    fb_result: string;
    status: string;
    result: string;
    hcap_spread: string;
    cs_home: string;
    cs_away: string;
    displayed: string;
    raw_desc: string;
    disporder: string;
    name: string;
}

export interface WilliamHillBoxingMatch {
    sport: Sport;
    type: Type;
    disporder: string;
    event: string;
    event_link: string;
    status: string;
    raw_primary: string;
    is_us_format: string;
    start_time: string;
    offset: string;
    secs_to_start_time: string;
    suspend_at: string;
    has_video: string;
    has_stats: string;
    is_off: string;
    is_running: string;
    mkt_display_count: string;
    name: string;
    lang: string;
    last_msg_id: string;
    com_last_msg_id: string;
    disp_perd_code: string;
    com_clock: ComClock;
    com_score: ComScore;
    collections: Collection[];
    markets: Market[];
    cast_markets: any[];
    selections: Selection[];
}
