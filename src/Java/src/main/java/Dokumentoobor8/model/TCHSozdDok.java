package Dokumentoobor8.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Dokumentoobor8.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТЧСоздДок
 */
@Entity(name = "IISDokumentoobor8ТЧСоздДок")
@Table(schema = "public", name = "ТЧСоздДок")
public class TCHSozdDok {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "FormaDokumenta")
    @Convert("FormaDokumenta")
    @Column(name = "ФормаДокумента", length = 16, unique = true, nullable = false)
    private UUID _formadokumentaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "FormaDokumenta", insertable = false, updatable = false)
    private FormaDokumenta formadokumenta;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "XrDok")
    @Convert("XrDok")
    @Column(name = "ДокументНеУт", length = 16, unique = true, nullable = false)
    private UUID _xrdokid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "XrDok", insertable = false, updatable = false)
    private XrDok xrdok;


    public TCHSozdDok() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}